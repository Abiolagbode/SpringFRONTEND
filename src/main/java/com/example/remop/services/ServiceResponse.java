package com.example.remop.services;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

/**
 * ServiceResponse
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class ServiceResponse<T> {

    private String status;
    private T data;
}