package com.mvp.aplication.controller.resquest;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class SoldierRequest {
    //todo - colocar as validações
    private String name;
    private String squad;
    private Long soldierId;
}
