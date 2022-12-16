package com.dermaSpa.models;

import java.util.ArrayList;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "direccion")

public class DireccionModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	
	private Long id;
	private String ciudad;
	private Integer cp;
	private String colonia;
	private String calle;
	private String numero;
	
	/***RELACIONES***/
	@OneToMany(mappedBy = "direccion")
    private ArrayList<OrdenModel> ordenes;

	/******/	
	
	public DireccionModel() {
	}
	
	public DireccionModel(Long id, String ciudad, Integer cp, String colonia, String calle, String numero,
			ArrayList<OrdenModel> ordenes) {
		this.id = id;
		this.ciudad = ciudad;
		this.cp = cp;
		this.colonia = colonia;
		this.calle = calle;
		this.numero = numero;
		this.ordenes = ordenes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getCiudad() {
		return ciudad;
	}

	public void setCiudad(String ciudad) {
		this.ciudad = ciudad;
	}

	public Integer getCp() {
		return cp;
	}

	public void setCp(Integer cp) {
		this.cp = cp;
	}

	public String getColonia() {
		return colonia;
	}

	public void setColonia(String colonia) {
		this.colonia = colonia;
	}

	public String getCalle() {
		return calle;
	}

	public void setCalle(String calle) {
		this.calle = calle;
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public ArrayList<OrdenModel> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(ArrayList<OrdenModel> ordenes) {
		this.ordenes = ordenes;
	}

	

	
}
