using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Hosting;
using System.Web.Http;
using iTextSharp.text;
using iTextSharp.text.pdf;

namespace FireflyCharacter.Controllers
{
    [RoutePrefix("api/generation")]
    public class GenerationController : ApiController
    {
		private static Dictionary<Guid, byte[]> pdfs = new Dictionary<Guid, byte[]>();

		class SkillPdfReference
		{
			public string Speciality { get; set; }
			public Dictionary<int, string> BySides { get; } = new Dictionary<int, string>();
		}

		class DistinctionPdfPreference
		{
			public string Name { get; set; }
			public TriggerPdfReference[] Triggers { get; } = new TriggerPdfReference[] { new TriggerPdfReference(), new TriggerPdfReference() };
			public TriggerPdfReference Trigger0 { get { return Triggers[0]; } set { Triggers[0] = value; } } 
			public TriggerPdfReference Trigger1 { get { return Triggers[1]; } set { Triggers[1] = value; } } 	

		}

		class TriggerPdfReference
		{
			public string Check { get; set; }
			public string Trigger { get; set; }
		}

		private static string NamePdfField = "name-crew";
		private static string DescriptionPdfField = "Description-crew";
		private static string BackgroundPdfField = "background-crew";
		private static string SignatureAssetsPdfField = "sigassets-crew";


		private static Dictionary<int, string> mental = new Dictionary<int, string>()	{ { 4, "attribcheck1-crew" }, { 6, "attribcheck2-crew" }, { 8, "attribcheck3-crew" }, { 10, "attribcheck4-crew" }, { 12, "attribcheck5-crew" } };
		private static Dictionary<int, string> physical = new Dictionary<int, string>() { { 4, "attribcheck6-crew" }, { 6, "attribcheck7-crew" }, { 8, "attribcheck8-crew" }, { 10, "attribcheck9-crew" }, { 12, "attribcheck10-crew" } };
		private static Dictionary<int, string> social = new Dictionary<int, string>()	{ { 4, "attribcheck11-crew" }, { 6, "attribcheck12-crew" }, { 8, "attribcheck13-crew" }, { 10, "attribcheck14-crew" }, { 12, "attribcheck15-crew" } };

		private static DistinctionPdfPreference[] distinctions = new[]
		{
			new DistinctionPdfPreference { Name = "distinctionsname1-crew", Trigger0 = { Check = "check1-crew", Trigger = "distinctions1-crew" }, Trigger1 = { Check = "check2-crew", Trigger = "distinctions2-crew" } },
			new DistinctionPdfPreference { Name = "distinctionsname2-crew", Trigger0 = { Check = "check3-crew", Trigger = "distinctions3-crew" }, Trigger1 = { Check ="check4-crew",  Trigger = "distinctions4-crew" } },
			new DistinctionPdfPreference { Name = "distinctionsname3-crew", Trigger0 = { Check = "check5-crew", Trigger = "distinctions5-crew" }, Trigger1 = { Check = "check6-crew", Trigger = "distinctions6-crew" } },
		};

		private static Dictionary<string, SkillPdfReference> skills = new Dictionary<string, SkillPdfReference>
		{
			{ "Craft"       , new SkillPdfReference { Speciality = "skills1-crew",  BySides = { { 4, "skillscheck1-crew" }, { 6, "skillscheck2-crew" }, { 8, "skillscheck3-crew" }, { 10, "skillscheck4-crew" }, { 12, "skillscheck5-crew" } } }       },
			{ "Drive"       , new SkillPdfReference { Speciality = "skills2-crew",  BySides = { { 4, "skillscheck6-crew" }, { 6, "skillscheck7-crew" }, { 8, "skillscheck8-crew" }, { 10, "skillscheck9-crew" }, { 12, "skillscheck10-crew" } } }      },
			{ "Fight"       , new SkillPdfReference { Speciality = "skills3-crew",  BySides = { { 4, "skillscheck11-crew" }, { 6, "skillscheck12-crew" }, { 8, "skillscheck13-crew" }, { 10, "skillscheck14-crew" }, { 12, "skillscheck15-crew" } } }  },
			{ "Fix"         , new SkillPdfReference { Speciality = "skills4-crew",  BySides = { { 4, "skillscheck16-crew" }, { 6, "skillscheck17-crew" }, { 8, "skillscheck18-crew" }, { 10, "skillscheck19-crew" }, { 12, "skillscheck20-crew" } } }  },
			{ "Fly"         , new SkillPdfReference { Speciality = "skills5-crew",  BySides = { { 4, "skillscheck21-crew" }, { 6, "skillscheck22-crew" }, { 8, "skillscheck23-crew" }, { 10, "skillscheck24-crew" }, { 12, "skillscheck25-crew" } } }  },
			{ "Focus"       , new SkillPdfReference { Speciality = "skills6-crew",  BySides = { { 4, "skillscheck26-crew" }, { 6, "skillscheck27-crew" }, { 8, "skillscheck28-crew" }, { 10, "skillscheck29-crew" }, { 12, "skillscheck30-crew" } } }  },
			{ "Influence"   , new SkillPdfReference { Speciality = "skills7-crew",  BySides = { { 4, "skillscheck31-crew" }, { 6, "skillscheck32-crew" }, { 8, "skillscheck33-crew" }, { 10, "skillscheck34-crew" }, { 12, "skillscheck35-crew" } } }  },
			{ "Know"        , new SkillPdfReference { Speciality = "skills8-crew",  BySides = { { 4, "skillscheck36-crew" }, { 6, "skillscheck37-crew" }, { 8, "skillscheck38-crew" }, { 10, "skillscheck39-crew" }, { 12, "skillscheck40-crew" } } }  },
			{ "Labor"       , new SkillPdfReference { Speciality = "skills9-crew",  BySides = { { 4, "skillscheck41-crew" }, { 6, "skillscheck42-crew" }, { 8, "skillscheck43-crew" }, { 10, "skillscheck44-crew" }, { 12, "skillscheck45-crew" } } }  },
			{ "Move"        , new SkillPdfReference { Speciality = "skills10-crew", BySides = { { 4, "skillscheck46-crew" }, { 6, "skillscheck47-crew" }, { 8, "skillscheck48-crew" }, { 10, "skillscheck49-crew" }, { 12, "skillscheck50-crew" } } }  },
			{ "Notice"      , new SkillPdfReference { Speciality = "skills11-crew", BySides = { { 4, "skillscheck51-crew" }, { 6, "skillscheck52-crew" }, { 8, "skillscheck53-crew" }, { 10, "skillscheck54-crew" }, { 12, "skillscheck55-crew" } } }  },
			{ "Operate"     , new SkillPdfReference { Speciality = "skills12-crew", BySides = { { 4, "skillscheck56-crew" }, { 6, "skillscheck57-crew" }, { 8, "skillscheck58-crew" }, { 10, "skillscheck59-crew" }, { 12, "skillscheck60-crew" } } }  },
			{ "Perform"     , new SkillPdfReference { Speciality = "skills13-crew", BySides = { { 4, "skillscheck61-crew" }, { 6, "skillscheck62-crew" }, { 8, "skillscheck63-crew" }, { 10, "skillscheck64-crew" }, { 12, "skillscheck65-crew" } } }  },
			{ "Shoot"       , new SkillPdfReference { Speciality = "skills14-crew", BySides = { { 4, "skillscheck66-crew" }, { 6, "skillscheck67-crew" }, { 8, "skillscheck68-crew" }, { 10, "skillscheck69-crew" }, { 12, "skillscheck70-crew" } } }  },
			{ "Sneak"       , new SkillPdfReference { Speciality = "skills15-crew", BySides = { { 4, "skillscheck71-crew" }, { 6, "skillscheck72-crew" }, { 8, "skillscheck73-crew" }, { 10, "skillscheck74-crew" }, { 12, "skillscheck75-crew" } } }  },
			{ "Survive"     , new SkillPdfReference { Speciality = "skills16-crew", BySides = { { 4, "skillscheck76-crew" }, { 6, "skillscheck77-crew" }, { 8, "skillscheck78-crew" }, { 10, "skillscheck79-crew" }, { 12, "skillscheck80-crew" } } }  },
			{ "Throw"       , new SkillPdfReference { Speciality = "skills17-crew", BySides = { { 4, "skillscheck81-crew" }, { 6, "skillscheck82-crew" }, { 8, "skillscheck83-crew" }, { 10, "skillscheck84-crew" }, { 12, "skillscheck85-crew" } } }  },
			{ "Treat"       , new SkillPdfReference { Speciality = "skills18-crew", BySides = { { 4, "skillscheck86-crew" }, { 6, "skillscheck87-crew" }, { 8, "skillscheck88-crew" }, { 10, "skillscheck89-crew" }, { 12, "skillscheck90-crew" } } }  },
			{ "Trick"       , new SkillPdfReference { Speciality = "skills19-crew", BySides = { { 4, "skillscheck91-crew" }, { 6, "skillscheck92-crew" }, { 8, "skillscheck93-crew" }, { 10, "skillscheck94-crew" }, { 12, "skillscheck95-crew" } } }  },
		};
		
		[HttpPost]
        [Route("character")]
        public IHttpActionResult Character([FromBody] Models.FireflyCharacter character)
        {
			var source = HostingEnvironment.MapPath("~/Content/InteractiveCrewAndShipSheets_MWP_DTRPG.pdf");

            var pdfReader = new PdfReader(source);
            pdfReader.SelectPages("2");
            var target = new MemoryStream();
            var pdfStamper = new PdfStamper(pdfReader, target);

            // create and populate a string builder with each of the 
            // field names available in the subject PDF

            var sb = new StringBuilder();
            foreach (var de in pdfReader.AcroFields.Fields)
            {
                sb.Append(de.Key.ToString() + Environment.NewLine);
            }
            // Write the string builder's content to the form's textbox

            pdfStamper.AcroFields.SetField(NamePdfField, character.Bio.Name);
            pdfStamper.AcroFields.SetField(DescriptionPdfField, character.Bio.Gender.ToString("g"));
            pdfStamper.AcroFields.SetField(BackgroundPdfField, character.Bio.System);

			Action<string> check = (fieldName) => pdfStamper.AcroFields.SetField(fieldName, "Yes");
			check(physical[character.Attributes.Physical.Sides]);
			check(mental[character.Attributes.Mental.Sides]);
			check(social[character.Attributes.Social.Sides]);

			for (var i = 0; i < 3; i++)
			{
				pdfStamper.AcroFields.SetField(distinctions[i].Name, character.Distinctions[i].Name);
				for (var j = 0; j < 2; j++)
				{
					pdfStamper.AcroFields.SetField(distinctions[i].Triggers[j].Trigger, character.Distinctions[i].Triggers[j].Name + ": " + character.Distinctions[i].Triggers[j].Description);
					if (character.SelectedTriggers[i][j])
						check(distinctions[i].Triggers[j].Check);
                }
			}

			foreach (var skill in character.Skills)
			{
				if (skill.BoughtSpeciality)
				{
					pdfStamper.AcroFields.SetField(skills[skill.Name].Speciality, skill.Speciality ?? "--Purchased/Undecided--");
                }
				check(skills[skill.Name].BySides[skill.Rating.Sides]);
			}

			pdfStamper.AcroFields.SetField(SignatureAssetsPdfField, string.Join("\n", from sa in character.SignatureAssets
																					  select (sa.Name ?? "--Unnamed--") + " (d" + sa.Rating.Sides + ")"));

			pdfStamper.FormFlattening = false;
            pdfStamper.Close();

            //var bytes = ExtractPages(new PdfReader(target.ToArray()), 2, 2);
            var bytes = target.ToArray();

			var id = Guid.NewGuid();
			pdfs[id] = bytes;

			new Thread(() =>
			{
				Thread.Sleep(60000);
				pdfs.Remove(id);
			}).Start();

			return Ok(id);
        }

		[HttpGet]
		[Route("download/{id}")]
		public HttpResponseMessage Download(Guid id)
		{
			var result = Request.CreateResponse(HttpStatusCode.OK);
			result.Content = new StreamContent(new MemoryStream(pdfs[id]));
            result.Content.Headers.ContentType = new System.Net.Http.Headers.MediaTypeHeaderValue("application/pdf");
			result.Content.Headers.ContentDisposition = new System.Net.Http.Headers.ContentDispositionHeaderValue("attachment");
			result.Content.Headers.ContentDisposition.FileName = "download.pdf";
			return result;
		}


        public static byte[] ExtractPages(PdfReader reader, int startPage, int endPage)
        {
            var sourceDocument = new Document(reader.GetPageSizeWithRotation(startPage));
            var target = new MemoryStream();
            var pdfCopyProvider = new PdfCopy(sourceDocument, target);

            sourceDocument.Open();

            for (int i = startPage; i <= endPage; i++)
            {
                var importedPage = pdfCopyProvider.GetImportedPage(reader, i, false);
                pdfCopyProvider.AddPage(importedPage);
                pdfCopyProvider.DirectContentUnder.AddTemplate(importedPage, 0, 0);
            }


            sourceDocument.Close();
            reader.Close();

            return target.ToArray();
        }
    }
}
