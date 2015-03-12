namespace FireflyCharacter.Models
{
	public class Distinction
	{
		public string Name { get; set; }
		public string Description { get; set; }
		public string[] HighlightedSkills { get; set; }
		public Trigger[] Triggers { get; set; }
	}
}