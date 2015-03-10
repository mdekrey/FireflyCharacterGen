using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace FireflyCharacter.Controllers
{
	[RoutePrefix("api/generation")]
    public class GenerationController : ApiController
    {
		[HttpPost]
		[Route("character")]
		public async Task<HttpResponseMessage> Character([FromBody] Models.FireflyCharacter character)
		{
			await Task.Yield();

			return new HttpResponseMessage(HttpStatusCode.OK);
		}
	}
}
