﻿using System;

namespace UserRegistrationAPI.Models
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; } 
        public DateTime DateOfBirth { get; set; }
        public string Email { get; set; }

    }
}
