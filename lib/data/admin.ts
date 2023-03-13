import { Item } from "../demos";

export const adminActions: { name: string; items: Item[] }[] = [
	{
	  name: 'Admin function',
	  items: [
		{
		  name: 'Account Manage',
		  slug: 'layouts',
		  description: 'Create UI that is shared across routes',
		},
		{
		  name: 'Grouped Layouts',
		  slug: 'route-groups',
		  description: 'Organize routes without affecting URL paths',
		},
		{
		  name: 'Streaming with Suspense',
		  slug: 'streaming',
		  description:
			'Streaming data fetching from the server with React Suspense',
		},
	  ],
	},
]

export const adminSettings: any[] = [	
		{
		  name: 'Layouts',
		  items: [
			{
			  name: 'Nested Layouts',
			  slug: 'layouts',
			  description: 'Create UI that is shared across routes',
			},
			{
			  name: 'Grouped Layouts',
			  slug: 'route-groups',
			  description: 'Organize routes without affecting URL paths',
			},
			{
			  name: 'Streaming with Suspense',
			  slug: 'streaming',
			  description:
				'Streaming data fetching from the server with React Suspense',
			},
		  ],
		},
		{
		  name: 'Show data',
		  items: [
			{
			  name: 'record',
			  slug: 'show/record',
			  description:
				'Create meaningful loading UI for specific parts of an app',
			},
			{
			  name: 'error.js',
			  slug: 'error-handling',
			  description: 'Create error UI for specific parts of an app',
			},
			{
			  name: 'head.js',
			  slug: 'head',
			  description: 'Configure the <head> tag of a route segment',
			},
		  ],
		},
		{
		  name: 'Data Fetching',
		  items: [
			{
			  name: 'Static-Site Generation',
			  slug: 'ssg',
			  description: 'Generate static pages',
			},
			{
			  name: 'Server-Side Rendering',
			  slug: 'ssr',
			  description: 'Server-render pages',
			},
			{
			  name: 'Incremental Static Regeneration',
			  slug: 'isr',
			  description: 'Get the best of both worlds between static & dynamic',
			},
		  ],
		},
]

