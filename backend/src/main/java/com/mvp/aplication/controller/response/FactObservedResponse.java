package com.mvp.aplication.controller.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
public class FactObservedResponse {
    private Long positivesFOsQnt;
    private Long negativesFOsQnt;
    private String categoryName;
}
