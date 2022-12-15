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
@Table(name = "usuario")

public class UsuarioFormModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
	
	private Long id;
	private String nombreUsuario;
	private String apellidoUsuario;
	private String email;
	private String contraseña;
	
	/***RELACIONES***/
	@OneToMany(mappedBy = "usuario")
    private ArrayList<OrdenModel> ordenes;
	
	/******/
	
	public UsuarioFormModel() {
	}

	public UsuarioFormModel(Long id, String nombreUsuario, String apellidoUsuario, String email, String contraseña) {
		this.id = id;
		this.nombreUsuario = nombreUsuario;
		this.apellidoUsuario = apellidoUsuario;
		this.email = email;
		this.contraseña = contraseña;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNombreUsuario() {
		return nombreUsuario;
	}

	public void setNombreUsuario(String nombreUsuario) {
		this.nombreUsuario = nombreUsuario;
	}

	public String getApellidoUsuario() {
		return apellidoUsuario;
	}

	public void setApellidoUsuario(String apellidoUsuario) {
		this.apellidoUsuario = apellidoUsuario;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContraseña() {
		return contraseña;
	}

	public void setContraseña(String contraseña) {
		this.contraseña = contraseña;
	}

	public ArrayList<OrdenModel> getOrdenes() {
		return ordenes;
	}

	public void setOrdenes(ArrayList<OrdenModel> ordenes) {
		this.ordenes = ordenes;
	}
	
	
}
