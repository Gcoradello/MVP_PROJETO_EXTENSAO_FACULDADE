package com.mvp.aplication.mapper;

import com.mvp.aplication.controller.response.FactObservedResponse;
import com.mvp.aplication.controller.resquest.FactObservedRequest;
import com.mvp.aplication.model.entity.FactObservedEntity;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2026-04-18T01:21:52-0300",
    comments = "version: 1.5.5.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-9.4.1.jar, environment: Java 17.0.12 (Oracle Corporation)"
)
@Component
public class FactObservedMapperImpl implements FactObservedMapper {

    @Override
    public FactObservedEntity toEntity(FactObservedRequest foRequest) {
        if ( foRequest == null ) {
            return null;
        }

        FactObservedEntity factObservedEntity = new FactObservedEntity();

        if ( foRequest.getSoldierId() != null ) {
            factObservedEntity.setSoldierId( Long.parseLong( foRequest.getSoldierId() ) );
        }
        factObservedEntity.setSquad( foRequest.getSquad() );
        factObservedEntity.setObservation( foRequest.getObservation() );
        factObservedEntity.setCategory( foRequest.getCategory() );
        factObservedEntity.setTag( foRequest.getTag() );

        return factObservedEntity;
    }

    @Override
    public FactObservedResponse toResponse(FactObservedEntity entity) {
        if ( entity == null ) {
            return null;
        }

        FactObservedResponse factObservedResponse = new FactObservedResponse();

        factObservedResponse.setTag( entity.getTag() );
        factObservedResponse.setCategory( entity.getCategory() );

        return factObservedResponse;
    }
}
