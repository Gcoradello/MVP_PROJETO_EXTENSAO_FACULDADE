package com.mvp.aplication.controller;

import com.mvp.aplication.controller.response.FactObservedResponse;
import com.mvp.aplication.controller.resquest.FactObservedRequest;
import com.mvp.aplication.service.FactObservedService;
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
@RequestMapping("/fo")
public class FactObservedController {

    @Autowired
    FactObservedService service;

    @PostMapping("/include")
    public ResponseEntity<Void> includeFactObserved (@RequestBody FactObservedRequest foRequest) {
        service.include(foRequest);

        return ResponseEntity.ok().build();
    }

    // todo - criar endpoint de find  de FOs

    @GetMapping("/{soldierId}")
    public ResponseEntity<List<FactObservedResponse>> findAllFactObservedBySoldierId(@PathVariable Long soldierId) {
        System.out.println("chamou com o id:" + soldierId);
        List<FactObservedResponse> listFOS = service.findAllFOBySoldierId(soldierId);

        return ResponseEntity.ok(listFOS);
    }
}
