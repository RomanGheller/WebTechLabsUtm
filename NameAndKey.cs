namespace FullASPProject1.Models
{
    public class NameAndKey
    {
        public string Name { get; set; } = "";
        public string Key { get; set; } = "";

        private static string RandomKey(int length)
        {
            Random random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }

        public NameAndKey(string Name)
        {
            this.Name = Name;
            Key = RandomKey(30);
        }

    }
}
