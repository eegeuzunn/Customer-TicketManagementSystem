using AutoMapper;
using backend.Data.DTOs;
using backend.Data.Entity;

namespace backend.MappingProfiles
{
    public class TicketProfile : Profile
    {
        public TicketProfile() {

            CreateMap<Ticket, TicketDto>().ForMember(dest => dest.CardinalityName, opt => opt.MapFrom(src => src.cardinality.Value));
            CreateMap<TicketUpdateDto, Ticket>()
               .ForMember(dest => dest.CreatedAt, opt => opt.Ignore())
               .ForMember(dest => dest.cardinality, opt => opt.Ignore());


            CreateMap<Ticket, TicketInsertionDto>().ReverseMap();
            CreateMap<Ticket, TicketUpdateDto>().ReverseMap();
        }
    }
}
