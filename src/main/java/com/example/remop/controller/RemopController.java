package com.example.remop.controller;

import java.util.ArrayList;
import java.util.List;

import com.example.remop.dto.Remop;
import com.example.remop.services.ServiceResponse;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


/**
 * RemopController
 */
public class RemopController {

    List<Remop> remopstore = new ArrayList<>();

    @GetMapping(value = "/index")
    // public ResponseEntity<Object> getAllNotes(){
    //     ServiceResponse<Remop> response = new ServiceResponse<Remop>("Success", (Remop) remopstore);
    //     return new ResponseEntity<>(response, HttpStatus.OK);
    // }
    public String getAjax(){
        String work = "It is working";
        return "add";
    }

    @PostMapping(value="/add")
    public String addAjax(){
        String  adding = "Added";
        return adding +"add";
    }
    // public SomeEnityData postMethodName(@RequestBody SomeEnityData entity) {
    //     //TODO: process POST request
        
    //     return entity;
    // }
    
}