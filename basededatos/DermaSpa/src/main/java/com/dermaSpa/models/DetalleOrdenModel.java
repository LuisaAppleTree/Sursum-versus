package com.dermaSpa.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "detalleOrden")

public class DetalleOrdenModel {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	
	private Long id;
	private Integer cantidadProductos;
	private Integer totalCompra;
	
	/***RELACIONES***/
	@OneToOne
	private OrdenModel orden;
	@OneToOne
	private DetallePagoModel detallePa;
	@ManyToOne
	private ProductosModel productos;
	/******/

	public DetalleOrdenModel() {
	}

	public DetalleOrdenModel(Long id, Integer cantidadProductos, Integer totalCompra, OrdenModel orden) {
		this.id = id;
		this.cantidadProductos = cantidadProductos;
		this.totalCompra = totalCompra;
		this.orden = orden;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Integer getCantidadProductos() {
		return cantidadProductos;
	}

	public void setCantidadProductos(Integer cantidadProductos) {
		this.cantidadProductos = cantidadProductos;
	}

	public Integer getTotalCompra() {
		return totalCompra;
	}

	public void setTotalCompra(Integer totalCompra) {
		this.totalCompra = totalCompra;
	}

	public OrdenModel getOrden() {
		return orden;
	}

	public void setOrden(OrdenModel orden) {
		this.orden = orden;
	}

	public DetallePagoModel getDetallePa() {
		return detallePa;
	}

	public void setDetallePa(DetallePagoModel detallePa) {
		this.detallePa = detallePa;
	}

	public ProductosModel getProductos() {
		return productos;
	}

	public void setProductos(ProductosModel productos) {
		this.productos = productos;
	}

	
	
	
	
}	

	