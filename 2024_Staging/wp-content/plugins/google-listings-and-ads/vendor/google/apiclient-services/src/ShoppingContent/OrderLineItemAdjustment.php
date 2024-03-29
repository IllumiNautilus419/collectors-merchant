<?php
/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */

namespace Automattic\WooCommerce\GoogleListingsAndAds\Vendor\Google\Service\ShoppingContent;

class OrderLineItemAdjustment extends \Automattic\WooCommerce\GoogleListingsAndAds\Vendor\Google\Model
{
  /**
   * @var Price
   */
  public $priceAdjustment;
  protected $priceAdjustmentType = Price::class;
  protected $priceAdjustmentDataType = '';
  /**
   * @var Price
   */
  public $taxAdjustment;
  protected $taxAdjustmentType = Price::class;
  protected $taxAdjustmentDataType = '';
  /**
   * @var string
   */
  public $type;

  /**
   * @param Price
   */
  public function setPriceAdjustment(Price $priceAdjustment)
  {
    $this->priceAdjustment = $priceAdjustment;
  }
  /**
   * @return Price
   */
  public function getPriceAdjustment()
  {
    return $this->priceAdjustment;
  }
  /**
   * @param Price
   */
  public function setTaxAdjustment(Price $taxAdjustment)
  {
    $this->taxAdjustment = $taxAdjustment;
  }
  /**
   * @return Price
   */
  public function getTaxAdjustment()
  {
    return $this->taxAdjustment;
  }
  /**
   * @param string
   */
  public function setType($type)
  {
    $this->type = $type;
  }
  /**
   * @return string
   */
  public function getType()
  {
    return $this->type;
  }
}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(OrderLineItemAdjustment::class, 'Google_Service_ShoppingContent_OrderLineItemAdjustment');
