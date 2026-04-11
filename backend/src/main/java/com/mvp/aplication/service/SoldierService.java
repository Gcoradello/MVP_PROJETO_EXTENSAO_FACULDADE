package com.mvp.aplication.service;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierResquest;
import com.mvp.aplication.infra.repository.SoldierRepository;
import com.mvp.aplication.mapper.SoldierMapper;
import com.mvp.aplication.model.entity.SoldierEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SoldierService {

    @Autowired
    SoldierRepository repository;

    @Autowired
    SoldierMapper mapper;

    public SoldierResponse create (SoldierResquest request) {
        SoldierEntity entity = mapper.toEntity(request);
        repository.save(entity);
        return mapper.toResponse(entity);
    }
}
