package com.mvp.aplication.service;

import com.mvp.aplication.controller.response.FactObservedResponse;
import com.mvp.aplication.controller.resquest.FactObservedRequest;
import com.mvp.aplication.infra.repository.FactObservedRepository;
import com.mvp.aplication.mapper.FactObservedMapper;
import com.mvp.aplication.model.entity.FactObservedEntity;
import com.mvp.aplication.model.entity.FactObservedProjection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FactObservedService {

    @Autowired
    FactObservedRepository repository;

    @Autowired
    FactObservedMapper mapper;

    public void include( FactObservedRequest foRequest) {
        // todo - validar se o soldado existe;
        // todo - tratar exceptions
        FactObservedEntity fo = mapper.toEntity(foRequest);
        repository.save(fo);
    }

    public List<FactObservedResponse> findAllFOBySoldierId (Long soldierId) {
        List<FactObservedProjection> listFOS = repository.findAllBySoldierId(soldierId);

        return buildListFOsResponse(listFOS);
    }

    public List<FactObservedResponse> findAllFOBySquad (String squad) {
        List<FactObservedProjection> listFOS = repository.findAllBySquad(squad);

        return buildListFOsResponse(listFOS);
    }

    private List<FactObservedResponse> buildListFOsResponse (List<FactObservedProjection> list) {
        return list.stream()
                .map(p -> new FactObservedResponse(
                        p.getPositives(),
                        p.getNegatives(),
                        p.getCategory()
                ))
                .toList();
    }
}
