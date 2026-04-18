package com.mvp.aplication.controller.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class SoldierResponse {

    private String name;
    private String squad;
    private Long soldierId;
}
