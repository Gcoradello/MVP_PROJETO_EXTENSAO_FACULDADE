package com.mvp.aplication.mapper;

import com.mvp.aplication.controller.response.SoldierResponse;
import com.mvp.aplication.controller.resquest.SoldierRequest;
import com.mvp.aplication.model.entity.SoldierEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-04-13T21:33:16-0300",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-9.4.1.jar, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class SoldierMapperImpl implements SoldierMapper {

    @Override
    public SoldierResponse toResponse(SoldierEntity soldier) {
        if ( soldier == null ) {
            return null;
        }

        SoldierResponse soldierResponse = new SoldierResponse();

        soldierResponse.setName( soldier.getName() );
        soldierResponse.setSecondName( soldier.getSecondName() );
        soldierResponse.setSquad( soldier.getSquad() );
        soldierResponse.setSoldierId( soldier.getSoldierId() );
        soldierResponse.setDateBirth( soldier.getDateBirth() );

        return soldierResponse;
    }

    @Override
    public SoldierEntity toEntity(SoldierRequest request) {
        if ( request == null ) {
            return null;
        }

        SoldierEntity soldierEntity = new SoldierEntity();

        soldierEntity.setName( request.getName() );
        soldierEntity.setSecondName( request.getSecondName() );
        soldierEntity.setSquad( request.getSquad() );
        soldierEntity.setSoldierId( request.getSoldierId() );
        soldierEntity.setDateBirth( request.getDateBirth() );

        return soldierEntity;
    }
}
