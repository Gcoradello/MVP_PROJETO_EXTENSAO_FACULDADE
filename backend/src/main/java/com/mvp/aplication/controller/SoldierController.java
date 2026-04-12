package com.mvp.aplication.controller;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierRequest;
import com.mvp.aplication.service.SoldierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/soldier")
public class SoldierController {

    @Autowired
    SoldierService service;

    // todo - endpoint de post criação


    @PostMapping("/create")
    public ResponseEntity<Void> create (@RequestBody SoldierRequest request) {
        service.create(request);
        return ResponseEntity.ok().build();
    }

    // todo - endpoint de get findBySoldierid

    @GetMapping("/{soldierId}")
    public ResponseEntity<SoldierResponse> findBySoldierId(@PathVariable Long soldierId) {

        return ResponseEntity.ok(service.findBySoldierId(soldierId));
    }

    // todo - endpoint de get findBySquad

    @GetMapping("/{squad}/squad")
    public ResponseEntity<List<SoldierResponse>> findBySoldierId(@PathVariable String squad) {

        return ResponseEntity.ok(service.findBySquad(squad));
    }


}
