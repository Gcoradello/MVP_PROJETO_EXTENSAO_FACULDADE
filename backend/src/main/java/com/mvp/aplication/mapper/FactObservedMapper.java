package com.mvp.aplication.mapper;

import com.mvp.aplication.controller.resquest.FactObservedRequest;
import com.mvp.aplication.model.entity.FactObservedEntity;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FactObservedMapper  {

    FactObservedEntity toEntity(FactObservedRequest foRequest);
}
