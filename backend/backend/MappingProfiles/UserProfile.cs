using AutoMapper;
using backend.Data.DTOs;
using backend.Data.Entity;

namespace backend.MappingProfiles
{
    public class UserProfile : Profile

    {
        public UserProfile()
        {
            CreateMap<User, UserDto>().ReverseMap();
            CreateMap<User, UserInsertionDto>().ReverseMap();
            CreateMap<User, UserUpdateDto>().ReverseMap();
        }
    }
}
