using DbExploration.Data;
using FullASPProject1.Models;
using FullStackProject2;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;



namespace FullASPProject1.Controllers
{
    public abstract class AuthController : ControllerBase
    {
        public Person? AuthUser { get; set; }
    }
        
    [ApiController]

    public class AuthenticationControler : AuthController
    {
       
        readonly ILogger<AuthenticationControler> _logger;

        private readonly ApiDbContext _apiDbContext;
        public AuthenticationControler(ILogger<AuthenticationControler> logger, ApiDbContext apiDbContext) 
        {
            _logger = logger;
            _apiDbContext = apiDbContext;
        }
        

        [HttpPost]
        [Route("/Authentication")]

        public NameAndKey? Authenticate (LoginAndPassword loginAndPassword) {
            var user = _apiDbContext.Persons
                .Where(person =>
                    person.Email == loginAndPassword.Login && person.Password == loginAndPassword.Password)
                .FirstOrDefault();

            if (user != null) 
            {
                var nameAndKey = new NameAndKey(user.Name);
                user.Key = nameAndKey.Key;
                _apiDbContext.SaveChanges();
                return nameAndKey;
            }
            else
            {
                Response.StatusCode = 401;
                return null;
            }          
        }

        [HttpPost]
        [Route("/Registration")]
        public void AddNewUser(Person person)
        {
            _apiDbContext.Persons.Add(person);
            _apiDbContext.SaveChanges();

            Response.StatusCode = 201;
        }

        

        [HttpPost]
        [Route("/UserDelete")]
        [LoginFilter]
        public void DeleteUser()
        {
            if (AuthUser != null)
            {
                _apiDbContext.Persons.Remove(AuthUser);
                _apiDbContext.SaveChanges();
            }

            Response.StatusCode = 204;
        }

    }
}
