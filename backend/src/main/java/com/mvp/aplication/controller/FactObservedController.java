package com.mvp.aplication.controller;

import com.mvp.aplication.controller.resquest.FactObservedRequest;
import com.mvp.aplication.service.FactObservedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/fo")
public class FactObservedController {

    @Autowired
    FactObservedService service;

    @PostMapping("/include")
    public ResponseEntity<Void> includeFactObserved (@RequestBody FactObservedRequest foRequest) {
        service.include(foRequest);

        return ResponseEntity.ok().build();
    }
}
