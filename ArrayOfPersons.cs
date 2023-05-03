namespace FullASPProject1.Models
{
    public class ArrayOfPersons
    {
        public Person[] Data { get;}
        private ArrayOfPersons(Person[] Data)
        {
            this.Data = Data;
        }
        public static ArrayOfPersons Create(params Person[] Data)
        {
            return new(Data);
        }
        public ArrayOfPersons Show()
        {
            foreach(Person person in Data) {
                person.Show();
            }
            return this;
        }
    }
}
