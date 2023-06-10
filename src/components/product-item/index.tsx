import { component$, useSignal } from '@builder.io/qwik'
import type { productType } from '~/routes'

export const ProductItem = component$(
  ({ product }: { product: productType }) => {
    const imageSrc = useSignal(product.thumbnail)

    return (
      <li class='py-2 rounded-md flex flex-col gap-2 p-4 shadow-md'>
        <h3 class='font-bold text-xl'>{product.title}</h3>
        <p class='line-clamp-1'>{product.description}</p>
        <img
          class='rounded-lg w-full aspect-square object-cover'
          src={imageSrc.value}
          loading='lazy'
          alt={product.title}
          width={300}
          height={300}
        />
        <div class='flex flex-row flex-wrap gap-2'>
          {product.images.map((image, index) => (
            <img
              class='rounded-md object-cover aspect-square cursor-pointer'
              key={`${product.id}-images-${index}`}
              src={image}
              alt='image'
              loading='lazy'
              width={60}
              height={60}
              onClick$={() => (imageSrc.value = image)}
            />
          ))}
        </div>
      </li>
    )
  }
)
