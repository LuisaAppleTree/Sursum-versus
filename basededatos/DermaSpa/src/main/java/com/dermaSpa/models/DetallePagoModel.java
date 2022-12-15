package com.dermaSpa.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "detallePago")

public class DetallePagoModel {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	
	private Long id;
	private Integer numeroTarjeta;
	private String titularTarjeta;
	private String expiracion;
	private Integer cvv;
	
	/***RELACIONES***/
	@OneToOne
	private DetalleOrdenModel detalleOr;
	/******/

	public DetallePagoModel() {
	}
	
	public DetallePagoModel(Long id, Integer numeroTarjeta, String titularTarjeta, String expiracion, Integer cvv,
			DetalleOrdenModel detalleOr) {
		this.id = id;
		this.numeroTarjeta = numeroTarjeta;
		this.titularTarjeta = titularTarjeta;
		this.expiracion = expiracion;
		this.cvv = cvv;
		this.detalleOr = detalleOr;
	}
	
	public Long getId() {
		return id;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public Integer getNumeroTarjeta() {
		return numeroTarjeta;
	}
	
	public void setNumeroTarjeta(Integer numeroTarjeta) {
		this.numeroTarjeta = numeroTarjeta;
	}
	
	public String getTitularTarjeta() {
		return titularTarjeta;
	}
	
	public void setTitularTarjeta(String titularTarjeta) {
		this.titularTarjeta = titularTarjeta;
	}
	
	public String getExpiracion() {
		return expiracion;
	}
	
	public void setExpiracion(String expiracion) {
		this.expiracion = expiracion;
	}
	
	public Integer getCvv() {
		return cvv;
	}
	
	public void setCvv(Integer cvv) {
		this.cvv = cvv;
	}
	
	public DetalleOrdenModel getDetalleOr() {
		return detalleOr;
	}
	
	public void setDetalleOr(DetalleOrdenModel detalleOr) {
		this.detalleOr = detalleOr;
	}
	
	
	
	
	
	
	
	
	
}
