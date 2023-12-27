import type { ImageProps, ImageSourcePropType } from '@lindo/components'
import type { ServiceView, ServicePhotoShape } from '@lindo/types'

export const shapeStyles: Record<ServicePhotoShape, ImageProps['style']> = {
	horizontal: {
		width: 99,
		height: 88
	},
	vertical: {
		width: 88,
		height: 99
	}
}

export const shapeImages: Record<ServicePhotoShape, ImageSourcePropType> = {
	horizontal: require('../../../assets/images/shapes/horizontal.png'),
	vertical: require('../../../assets/images/shapes/vertical.png')
}

export const serviceList: ServiceView[] = [
	{
		id: 1,
		name: 'Üz baxımı',
		image:
			'https://images.unsplash.com/photo-1531299244174-d247dd4e5a66?q=80&w=2407&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'horizontal'
	},
	{
		id: 2,
		name: 'Saç kəsimi',
		image:
			'https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&w=3626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'vertical'
	},
	{
		id: 3,
		name: 'Makiyaj',
		image:
			'https://plus.unsplash.com/premium_photo-1664451177155-8247ae799c8b?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'horizontal'
	},
	{
		id: 4,
		name: 'Dırnaq kəsimi',
		image:
			'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'vertical'
	},
	{
		id: 5,
		name: 'Şellak',
		image:
			'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'horizontal'
	},
	{
		id: 6,
		name: 'Saç',
		image:
			'https://images.unsplash.com/photo-1574621100236-d25b64cfd647?q=80&w=3648&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		imageOrientation: 'vertical'
	}
]
