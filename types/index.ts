export interface ThemeProps {
	lightColor?: string;
	darkColor?: string;
}

export interface Entity {
	id: number;
	name: string;
	address: string;
	location: Location;
	distance: number;
	distanceUnit: DistanceUnit;
	image: string;
	openTime: string;
	closeTime: string;
	rating: number;
	ratingCount: number;
	price: number;
	priceUnit: string;
	services: string[];
	phone: string;
	website: string;
	email: string;
	description: string;
	reviews: Review[];
}

export type ServicePhotoShape = 'horizontal' | 'vertical';

export interface Service {
	id: number;
	name: string;
	price: number;
	priceUnit: string;
	image: string;
	imageOrientation: ServicePhotoShape;
	images: string[];
}

export type ServiceView = Pick<
	Service,
	'id' | 'name' | 'image' | 'imageOrientation'
>;

export interface Company extends Partial<Entity> {
	employees: Stylist[];
	entities: Entity[];
}

interface WorkPlace {
	profession: string;
	startDate: string;
	endDate?: string;
	entity: Company;
}

export interface Stylist extends Entity {
	workplaces: WorkPlace[];
	abilities: string[];
}

type StylistViewPartialStylist = Pick<
	Stylist,
	'id' | 'name' | 'image' | 'rating' | 'ratingCount'
>;
type StylistViewPartialWorkPlace = Pick<WorkPlace, 'endDate' | 'profession'>;
export interface StylistView
	extends StylistViewPartialStylist,
		StylistViewPartialWorkPlace {
	entityName: Entity['name'];
}

export type BeautySalonView = Pick<
	Entity,
	'id' | 'name' | 'image' | 'address' | 'distance' | 'distanceUnit'
>;

type DistanceUnit = 'm' | 'km';

interface Location {
	latitude: number;
	longitude: number;
}

interface Review {
	id: number;
	name: string;
	date: string;
	rating: number;
	comment: string;
}
