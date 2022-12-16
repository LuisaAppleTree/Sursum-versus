package com.dermaSpa.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "orden")

public class OrdenModel {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	
	private Long id;
	private String fecha;
	
	/***RELACIONES***/
	@ManyToOne
	private UsuarioFormModel usuario;
	
	@ManyToOne
	private DireccionModel direccion;
	/******/

	public OrdenModel() {
	}

	public OrdenModel(Long id, String fecha) {
		this.id = id;
		this.fecha = fecha;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFecha() {
		return fecha;
	}

	public void setFecha(String fecha) {
		this.fecha = fecha;
	}

	public UsuarioFormModel getUsuario() {
		return usuario;
	}

	public void setUsuario(UsuarioFormModel usuario) {
		this.usuario = usuario;
	}

	public DireccionModel getDireccion() {
		return direccion;
	}

	public void setDireccion(DireccionModel direccion) {
		this.direccion = direccion;
	}

	
	
	
	
	
	
}
