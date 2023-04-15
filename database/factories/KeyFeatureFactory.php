<?php

namespace Database\Factories;

use App\Models\KeyFeature;
use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory
 */
class KeyFeatureFactory extends Factory
{
    protected $model = KeyFeature::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => Product::factory(),
            'name' => $this->faker->word,
            'details' => $this->faker->sentence,
        ];
    }
}
