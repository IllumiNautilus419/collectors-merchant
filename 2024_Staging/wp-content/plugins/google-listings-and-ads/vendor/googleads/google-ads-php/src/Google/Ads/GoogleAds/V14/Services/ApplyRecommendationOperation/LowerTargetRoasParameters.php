<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v14/services/recommendation_service.proto

namespace Google\Ads\GoogleAds\V14\Services\ApplyRecommendationOperation;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Parameters to use when applying lower Target ROAS recommendations.
 *
 * Generated from protobuf message <code>google.ads.googleads.v14.services.ApplyRecommendationOperation.LowerTargetRoasParameters</code>
 */
class LowerTargetRoasParameters extends \Google\Protobuf\Internal\Message
{
    /**
     * Required. Target to set ROAS multiplier to. This is a required field.
     *
     * Generated from protobuf field <code>double target_roas_multiplier = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     */
    protected $target_roas_multiplier = 0.0;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type float $target_roas_multiplier
     *           Required. Target to set ROAS multiplier to. This is a required field.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V14\Services\RecommendationService::initOnce();
        parent::__construct($data);
    }

    /**
     * Required. Target to set ROAS multiplier to. This is a required field.
     *
     * Generated from protobuf field <code>double target_roas_multiplier = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @return float
     */
    public function getTargetRoasMultiplier()
    {
        return $this->target_roas_multiplier;
    }

    /**
     * Required. Target to set ROAS multiplier to. This is a required field.
     *
     * Generated from protobuf field <code>double target_roas_multiplier = 1 [(.google.api.field_behavior) = REQUIRED];</code>
     * @param float $var
     * @return $this
     */
    public function setTargetRoasMultiplier($var)
    {
        GPBUtil::checkDouble($var);
        $this->target_roas_multiplier = $var;

        return $this;
    }

}

// Adding a class alias for backwards compatibility with the previous class name.
class_alias(LowerTargetRoasParameters::class, \Google\Ads\GoogleAds\V14\Services\ApplyRecommendationOperation_LowerTargetRoasParameters::class);

