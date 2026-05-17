package com.mvp.aplication.infra.repository;

import com.mvp.aplication.model.Enum.FOEnum;
import com.mvp.aplication.model.entity.FactObservedEntity;
import com.mvp.aplication.model.entity.FactObservedProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FactObservedRepository extends JpaRepository<FactObservedEntity, Long> {

    @Query("SELECT " +
            "f.category AS category, " +
            "SUM(CASE WHEN f.tag = com.mvp.aplication.model.Enum.FOEnum.FO_POSITIVE THEN 1 ELSE 0 END) AS positives, " +
            "SUM(CASE WHEN f.tag = com.mvp.aplication.model.Enum.FOEnum.FO_NEGATIVE THEN 1 ELSE 0 END) AS negatives " +
            "FROM FactObservedEntity f " +
            "WHERE f.soldierId = :soldierId " +
            "GROUP BY f.category")
    List<FactObservedProjection> findAllBySoldierId(Long soldierId);

    @Query("SELECT " +
            "f.category AS category, " +
            "SUM(CASE WHEN f.tag = com.mvp.aplication.model.Enum.FOEnum.FO_POSITIVE THEN 1 ELSE 0 END) AS positives, " +
            "SUM(CASE WHEN f.tag = com.mvp.aplication.model.Enum.FOEnum.FO_NEGATIVE THEN 1 ELSE 0 END) AS negatives " +
            "FROM FactObservedEntity f " +
            "WHERE f.squad = :squad " +
            "GROUP BY f.category")
    List<FactObservedProjection> findAllBySquad(@Param("squad") String squad);
}