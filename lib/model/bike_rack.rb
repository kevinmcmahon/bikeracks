class BikeRack
    include DataMapper::Resource
    storage_names[:default] = :bike_racks

    property :id,             Serial
    property :rackid,         Integer
    property :address,        String
    property :ward,           Integer
    property :community_area, Integer
    property :community_name, String
    property :totinstall,     Integer
    property :latitude,       Float
    property :longitude,      Float
    property :historical,     Integer
end