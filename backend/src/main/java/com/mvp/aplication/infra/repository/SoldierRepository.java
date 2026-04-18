package com.mvp.aplication.infra.repository;

import com.mvp.aplication.model.entity.SoldierEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SoldierRepository extends JpaRepository<SoldierEntity, Long> {

    SoldierEntity findBySoldierId(Long soldierId);
    List<SoldierEntity> findBySquad(String squad);
}
