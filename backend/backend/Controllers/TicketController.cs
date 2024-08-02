using AutoMapper;
using backend.Data.DTOs;
using backend.Data.Entity;
using backend.Data.Repository;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Http.HttpResults;


namespace backend.Controllers
{
    [Route("api")]
    [ApiController]
    public class TicketController : Controller
    {

        ITicketRepository ticketRepository;
        IMapper mapper;


        public TicketController(ITicketRepository ticketRepository, IMapper mapper)
        {
            this.ticketRepository = ticketRepository;
            this.mapper = mapper;
        }

        [HttpGet("tickets")]
        public IActionResult GetAll()
        {
            var tickets = ticketRepository.GetAllTicket();

            var ticketsDto = mapper.Map<List<TicketDto>>(tickets);

            return Ok(ticketsDto);
        }


        [HttpPost("ticket")]
        public IActionResult TicketPost(TicketInsertionDto ticketInsertionDto)
        {
            
            var ticket = mapper.Map<Ticket>(ticketInsertionDto);
            ticket.CreatedAt = DateTime.Now;
            var returnedTicket = ticketRepository.SaveTicket(ticket);

            if (returnedTicket != null)
            {
                var ticketDto = mapper.Map<TicketDto>(returnedTicket);
                return Created("api/ticket/" + ticketDto.Id, new { Message = "Succesfully 1 item created", Data = ticketDto });
            }

            return StatusCode(500, new { Message = "Some error occured" });
        }

        [HttpDelete("ticket/{id}")]
        public IActionResult DeleteOne(int id)
        {
            var deleted = ticketRepository.DeleteTicket(id);

            if (deleted == null) { 
                return NotFound("There is no ticket with id: " + id);
            }

            return Ok(new { Message = "Ticket deleted succesfully.", Data = deleted });
        }

        [HttpPut("ticket/{id}")]
        public IActionResult UpdateSingleTicket(int id, TicketUpdateDto ticketUpdateDto)
        {
            var ticket = mapper.Map<Ticket>(ticketUpdateDto);
            var returnedTicket= ticketRepository.UpdateTicket(id, ticket);

            if (returnedTicket == null) 
                return BadRequest();

            return StatusCode(200, new { Message = "1 ticket updated succesfully", Data = returnedTicket });

        }
    }
}
