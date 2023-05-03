using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Xml.Serialization;

namespace FullASPProject1.Models
{
    [Table("account")]
    public class Person
    {
        [Column("id")]
        public int Id { get; set; }
       
        [Column("name")]
        public string Name { get; set; }
       
        [Column("email")]
        public string Email { get; set; }

        [Column("password")]
        public string Password { get; set; }


        [Column("key")]  
        public string? Key { get; set; } = null;

        public Person() { }

        private Person(string Name, string Email, string Password)
        {
            this.Name = Name;
            this.Email = Email;
            this.Password = Password;
        }
        public static Person Create(string Name, string Email, string Password)
        {
            return new(Name, Email, Password);
        }
        public Person Show()
        {
            Console.WriteLine(Name + " " + Email + " " + Password);
           return this;
        }
    }
}
