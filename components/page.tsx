import Head from 'next/head'


interface Props {
	title?: string
	children: React.ReactNode
}

const Page = ({ title, children }: Props) => (
	<>
		{title ? (
			<Head>
				<title>Rice Bowl | {title}</title>
			</Head>
		) : null}


		<main
			/**
			 * Padding top = `appbar` height
			 * Padding bottom = `bottom-nav` height
			 */
			className='mx-auto px-safe pt-20 pb-16 sm:pb-0 max-w-screen-md'
		>
			<div className='p-6'>{children}</div>
		</main>

	</>
)

export default Page
