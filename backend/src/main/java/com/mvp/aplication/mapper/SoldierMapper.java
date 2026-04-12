package com.mvp.aplication.mapper;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierRequest;
import com.mvp.aplication.model.entity.SoldierEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface SoldierMapper {

    SoldierResponse toResponse(SoldierEntity soldier);

    SoldierEntity toEntity(SoldierRequest request);
}
