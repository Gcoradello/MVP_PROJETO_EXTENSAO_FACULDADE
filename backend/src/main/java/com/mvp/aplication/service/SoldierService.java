package com.mvp.aplication.service;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierRequest;
import com.mvp.aplication.infra.repository.SoldierRepository;
import com.mvp.aplication.mapper.SoldierMapper;
import com.mvp.aplication.model.entity.SoldierEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SoldierService {

    @Autowired
    SoldierRepository repository;

    @Autowired
    SoldierMapper mapper;

    public void create (SoldierRequest request) {
        // todo - validaçoes
        // todo - nao permitir soldiers com ids ja cadastrados
        SoldierEntity entity = mapper.toEntity(request);
        repository.save(entity);
    }


    public SoldierResponse findBySoldierId (Long soldierId) {
        // todo - tratar notfound
        SoldierEntity soldier = repository.findBySoldierId(soldierId);

        if (soldier == null) {
            throw new RuntimeException("Soldier not found");
        }
        return mapper.toResponse(soldier);
    }

    public List<SoldierResponse> findBySquad (String squad) {
        // todo - tratar notfound
        List<SoldierEntity> squadList = repository.findBySquad(squad);
        System.out.println(squadList);
        if (squad.isEmpty()) {
            throw new RuntimeException("Squad not found");
        }
        return squadList.stream()
                .map(mapper::toResponse)
                .toList();
    }
}
