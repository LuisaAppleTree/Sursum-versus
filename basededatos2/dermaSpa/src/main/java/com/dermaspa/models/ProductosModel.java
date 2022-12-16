package com.dermaspa.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "productos")

public class ProductosModel {
		
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
		
	private Long id;
	private String nombreProducto;
	private Double precio;
	private Integer existencia;
	
	/***RELACIONES***/

	/******/
	
	public ProductosModel() {
	}

	public ProductosModel(Long id, String nombreProducto, Double precio, Integer existencia) {
		this.id = id;
		this.nombreProducto = nombreProducto;
		this.precio = precio;
		this.existencia = existencia;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreProducto() {
		return nombreProducto;
	}

	public void setNombreProducto(String nombreProducto) {
		this.nombreProducto = nombreProducto;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public Integer getExistencia() {
		return existencia;
	}

	public void setExistencia(Integer existencia) {
		this.existencia = existencia;
	}

	
		
}