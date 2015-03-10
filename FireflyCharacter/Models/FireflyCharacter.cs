using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace FireflyCharacter.Models
{
	public class FireflyCharacter
	{
		public BioData Bio { get; set; }
		public Attributes Attributes { get; set; }
		public Distinction[] Distinctions { get; set; }
		public bool[][] SelectedTriggers { get; set; }
		public Skill[] Skills { get; set; }
		public SignatureAsset[] SignatureAssets { get; set; }
	}
}