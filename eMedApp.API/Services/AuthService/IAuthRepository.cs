using eMedApp.API.Model.User;
using System.Threading.Tasks;

namespace eMedApp.API.Services.AuthService
{
    public interface IAuthRepository
    {
         Task<User> Login(string username, string password);
         Task<User> Register(User user, string password);
         Task<bool> UserExists(string username);
    }
}