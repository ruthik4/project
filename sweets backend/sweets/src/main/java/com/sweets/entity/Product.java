package com.sweets.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Product {
	String productimage;
	@Id
	String productname;
	String productdescription;
	int productprice;
	public Product() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Product(String productimage, String productname, String productdescription, int productprice) {
		super();
		this.productimage = productimage;
		this.productname = productname;
		this.productdescription = productdescription;
		this.productprice = productprice;
	}
	public String getProductimage() {
		return productimage;
	}
	public void setProductimage(String productimage) {
		this.productimage = productimage;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductdescription() {
		return productdescription;
	}
	public void setProductdescription(String productdescription) {
		this.productdescription = productdescription;
	}
	public int getProductprice() {
		return productprice;
	}
	public void setProductprice(int productprice) {
		this.productprice = productprice;
	}
	@Override
	public String toString() {
		return "Product [productimage=" + productimage + ", productname=" + productname + ", productdescription="
				+ productdescription + ", productprice=" + productprice + "]";
	}

}
