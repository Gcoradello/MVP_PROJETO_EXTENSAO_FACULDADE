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
    private String squad;
    private FOEnum tag;
    private String category;
    private String observation;
}


