package com.mvp.aplication.controller.resquest;

import com.mvp.aplication.model.Enum.FOEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class FactObservedRequest {
    // todo - colocar validaçoes

    private String soldierId;
    private FOEnum tag;
    private String observation;
}


