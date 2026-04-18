package com.mvp.aplication.controller.response;

import com.mvp.aplication.model.Enum.FOEnum;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FactObservedResponse {
    private FOEnum tag;
    private String category;
}
