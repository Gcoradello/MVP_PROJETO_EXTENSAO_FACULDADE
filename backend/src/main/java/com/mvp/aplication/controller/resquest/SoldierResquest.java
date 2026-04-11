package com.mvp.aplication.controller.resquest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Getter
public class SoldierResquest {
    //todo - colocar as validações
    private String name;
    private String secondName;
    private String squad;
    private Long soldierId;
    private Long dateBirth;
}
