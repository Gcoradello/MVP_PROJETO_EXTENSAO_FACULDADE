package com.mvp.aplication.infra.repository;

import com.mvp.aplication.model.entity.FactObservedEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FactObservedRepository extends JpaRepository<FactObservedEntity, Long> {

    List<FactObservedEntity> findAllBySoldierId(Long soldierId);
}
