package com.mvp.aplication.controller;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierResquest;
import com.mvp.aplication.service.SoldierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/soldier")
public class SoldierController {

    @Autowired
    SoldierService service;

    // todo - endpoint de post criação

    public ResponseEntity<SoldierResponse> create (@RequestBody SoldierResquest request) {

        return ResponseEntity.ok(service.create(request));
    }

    // todo - endpoint de get findByid

    // todo - endpoint de get findBySquad


}
