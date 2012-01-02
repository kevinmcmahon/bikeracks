
CREATE TABLE bike_racks (
	id serial NOT NULL,
	rackid int,
	address character varying(50),
	ward int,
	community_area int,
	community_name character varying(50),
	totinstall int,
	latitude double precision,
	longitude double precision,
	historical int,
	geom geometry,
	CONSTRAINT bike_racks_pkey PRIMARY KEY (id),
	CONSTRAINT enforce_dims_geom CHECK (st_ndims(geom) = 2),
	CONSTRAINT enforce_geotype_geom CHECK (geometrytype(geom) = 'POINT'::text OR geom IS NULL),
	CONSTRAINT enforce_srid_geom CHECK (st_srid(geom) = 4326)
);

CREATE INDEX idx_bike_racks_geom
ON bike_racks USING gist(geom);

UPDATE bike_racks
SET geom = ST_GeomFromText('POINT(' || longitude || ' ' || latitude || ')',4326);
