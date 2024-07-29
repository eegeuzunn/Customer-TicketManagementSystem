using AutoMapper;
using backend.Data.DTOs;
using backend.Data.Entity;
using backend.Data.Repository;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers
{
    [Route("api/")]
    [ApiController]
    public class UserController : Controller
    {
        
        private IUserRepository userRepository;
        private IMapper mapper;
        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            this.userRepository = userRepository;
            this.mapper = mapper;
        }

        [HttpGet("users")]
        public IActionResult GetAll()
        {
            
            var users = userRepository.GetAll();

            var usersDto = mapper.Map<List<UserDto>>(users);

            return Ok(new { Message = "Request Complete", usersDto });
        }

        [HttpPost("user")]
        public IActionResult AddOne([FromBody] UserInsertionDto userInsertionDto) {
            
            var user = mapper.Map<User>(userInsertionDto);

            user = userRepository.InsertSingle(user);

            var userDto = mapper.Map<UserDto>(user);

            return Created("/api/user/" + userDto.Id, new { Message = "User created!", Data = userDto });
        }

        [HttpPost("users")]
        public IActionResult AddMultiple(List<UserInsertionDto> usersInsertionDto)
        {
            List<UserDto> usersDto = new();
            foreach(var userInsertionDto in usersInsertionDto){
                var user = mapper.Map<User>(userInsertionDto);
                user = userRepository.InsertSingle(user);
                var userDto = mapper.Map<UserDto>(user);
                usersDto.Add(userDto);
            }

            return Ok(usersDto);    
        }

        [HttpDelete("user/{id}")]
        public IActionResult DeleteOneWithId(int Id)
        {

            var user = userRepository.DeleteById(Id);
            if (user == null)
            {

                return NotFound("There is no user with " + Id);
            }

            return Ok(new { Message = $"1 User deleted!", user });
        }

        [HttpPut("user/{id}")]
        public IActionResult PutOneWithId(int Id, UserUpdateDto userUpdateDto)
        {

            var user = mapper.Map<User>(userUpdateDto);
            user.Id = Id;
            var updatedUser = userRepository.UpdateById(Id, user);

            var userDto = mapper.Map<UserDto>(updatedUser);

            return Ok(new { Message = "User updated succesfully", userDto });
            
        }
    }
}
