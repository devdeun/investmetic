'use client'

import { useState } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { FileIcon } from '@/public/icons'
import classNames from 'classnames/bind'

import { Button } from '@/shared/ui/button'
import BackHeader from '@/shared/ui/header/back-header'
import Input from '@/shared/ui/input'
import Select from '@/shared/ui/select'
import Title from '@/shared/ui/title'

import {
  MinimumInvestmentAmountType,
  OperationCycleType,
  ProposalFileInfoModel,
  StrategyModel,
} from '../../_api/add-strategy'
import {
  minimumInvestmentAmountOptions,
  operationCycleOptions,
} from '../../_constants/investment-amount'
import { useAddStrategy } from '../../_hooks/query/use-add-strategy'
import styles from './styles.module.scss'

const cx = classNames.bind(styles)

interface StrategyFormDataModel {
  strategyName: string
  tradeType: string | null
  operationCycle: OperationCycleType
  stockTypes: number[]
  minimumInvestmentAmount: MinimumInvestmentAmountType
  description: string
  proposalFile?: File
}

interface FormErrorsModel {
  strategyName: string
  tradeType: string
  operationCycle: string
  stockTypes: string
  minimumInvestmentAmount: string
  description: string
  proposalFile?: string
}

const initialFormData: StrategyFormDataModel = {
  strategyName: '',
  tradeType: '3',
  operationCycle: 'DAY',
  stockTypes: [],
  minimumInvestmentAmount: 'UNDER_10K',
  description: '',
}

const initialFormErrors: FormErrorsModel = {
  strategyName: '',
  tradeType: '',
  operationCycle: '',
  stockTypes: '',
  minimumInvestmentAmount: '',
  description: '',
  proposalFile: '',
}

const StrategyAddPage = () => {
  const router = useRouter()
  const { strategyTypes, registerStrategy, isTypesLoading, isRegistering, error } = useAddStrategy()

  const [formData, setFormData] = useState<StrategyFormDataModel>(initialFormData)
  const [formErrors, setFormErrors] = useState<FormErrorsModel>(initialFormErrors)

  const validateForm = (): boolean => {
    const newErrors = {
      strategyName: !formData.strategyName ? '전략 명칭을 입력해주세요.' : '',
      tradeType: !formData.tradeType ? '매매 유형을 선택해주세요.' : '',
      operationCycle: !formData.operationCycle ? '주기를 선택해주세요.' : '',
      stockTypes: formData.stockTypes.length === 0 ? '종목을 선택해주세요.' : '',
      minimumInvestmentAmount: !formData.minimumInvestmentAmount
        ? '최소 운용가능 금액을 선택해주세요.'
        : '',
      description: !formData.description ? '전략 소개를 입력해주세요.' : '',
    }

    setFormErrors(newErrors)
    return !Object.values(newErrors).some((error) => error)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    const isValidExcelFile =
      file &&
      (file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
        file.type === 'application/vnd.ms-excel')

    if (isValidExcelFile) {
      setFormData((prev) => ({ ...prev, proposalFile: file }))
      setFormErrors((prev) => ({ ...prev, proposalFile: '' }))
    } else {
      setFormErrors((prev) => ({ ...prev, proposalFile: '엑셀 파일만 업로드 가능합니다.' }))
    }
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!validateForm() || !formData.tradeType) return

    const fileInfo: ProposalFileInfoModel | null = formData.proposalFile
      ? {
          proposalFileName: formData.proposalFile.name,
          proposalFileSize: formData.proposalFile.size,
        }
      : null

    const data: StrategyModel = {
      strategyName: formData.strategyName,
      tradeTypeId: Number(formData.tradeType),
      operationCycle: formData.operationCycle,
      stockTypeIds: formData.stockTypes,
      minimumInvestmentAmount: formData.minimumInvestmentAmount,
      description: formData.description,
      proposalFile: fileInfo,
    }

    registerStrategy(data)
  }

  const handleInputChange = (field: keyof StrategyFormDataModel, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const toggleStockType = (value: number) => {
    setFormData((prev) => {
      const newStockTypes = prev.stockTypes.includes(value)
        ? prev.stockTypes.filter((type) => type !== value)
        : [...prev.stockTypes, value]
      return { ...prev, stockTypes: newStockTypes }
    })
    setFormErrors((prev) => ({ ...prev, stockTypes: '' }))
  }

  const renderStockTypes = () => (
    <div className={cx('stock-grid')}>
      {strategyTypes?.stockTypes.map((type) => (
        <button
          key={type.stockTypeId}
          type="button"
          onClick={() => toggleStockType(type.stockTypeId)}
          className={cx('stock-item', {
            selected: formData.stockTypes.includes(type.stockTypeId),
          })}
        >
          {type.stockTypeName}
          <span className={cx('marker')}>
            <Image src={type.stockIconUrl} alt={type.stockTypeName} width={20} height={20} />
          </span>
        </button>
      ))}
    </div>
  )

  const renderFileUpload = () => (
    <div className={cx('file-upload')}>
      <input
        type="file"
        accept=".xlsx,.xls"
        onChange={handleFileChange}
        id="proposalFile"
        className={cx('file-input')}
      />
      <label htmlFor="proposalFile" className={cx('file-label')}>
        <span>{formData.proposalFile?.name || '엑셀 제안서를 업로드해주세요'}</span>
        <FileIcon className={cx('file-icon')} />
      </label>
    </div>
  )

  if (isTypesLoading) {
    return <div className={cx('loading')}>로딩 중...</div>
  }

  const tradeTypeOptions =
    strategyTypes?.tradeTypes.map((type) => ({
      value: String(type.tradeTypeId),
      label: type.tradeTypeName,
    })) || []

  return (
    <>
      <BackHeader label="전략관리로 돌아가기" />
      <Title label="전략 등록" />
      <div className={cx('container')}>
        <form onSubmit={handleSubmit} className={cx('form')}>
          {error && <div className={cx('error')}>{error}</div>}

          <div className={cx('form-row')}>
            <label>전략 명칭</label>
            <div className={cx('form-field')}>
              <Input
                value={formData.strategyName}
                onChange={(e) => handleInputChange('strategyName', e.target.value)}
                placeholder="전략명을 입력하세요"
                className={cx('strategy-name-input')}
                errorMessage={formErrors.strategyName}
                hideErrorStyle
              />
            </div>
          </div>

          <div className={cx('horizontal-wrapper')}>
            <div className={cx('form-row', 'half')}>
              <label>매매 유형</label>
              <div className={cx('form-field')}>
                <Select
                  value={formData.tradeType}
                  onChange={(value) => handleInputChange('tradeType', value)}
                  options={tradeTypeOptions}
                  placeholder="매매 유형 선택"
                  titleStyle={{ width: '160px', height: '45px', border: '1px solid #ccc' }}
                  size="large"
                />
                {formErrors.tradeType && (
                  <div className={cx('field-error')}>{formErrors.tradeType}</div>
                )}
              </div>
            </div>

            <div className={cx('form-row', 'half')}>
              <label>주기</label>
              <div className={cx('form-field')}>
                <Select
                  value={formData.operationCycle}
                  onChange={(value) => handleInputChange('operationCycle', value)}
                  options={operationCycleOptions}
                  placeholder="주기 선택"
                  titleStyle={{ width: '160px', height: '45px', border: '1px solid #ccc' }}
                  size="large"
                />
                {formErrors.operationCycle && (
                  <div className={cx('field-error')}>{formErrors.operationCycle}</div>
                )}
              </div>
            </div>
          </div>

          <div className={cx('form-row')}>
            <label>종목</label>
            <div className={cx('form-field')}>
              {renderStockTypes()}
              {formErrors.stockTypes && (
                <div className={cx('field-error')}>{formErrors.stockTypes}</div>
              )}
            </div>
          </div>

          <div className={cx('form-row')}>
            <label>최소 운용가능 금액</label>
            <div className={cx('form-field')}>
              <Select
                value={formData.minimumInvestmentAmount}
                onChange={(value) => handleInputChange('minimumInvestmentAmount', value)}
                options={minimumInvestmentAmountOptions}
                placeholder="최소 운용가능 금액 선택"
                titleStyle={{ width: '160px', height: '45px', border: '1px solid #ccc' }}
                size="large"
              />
              {formErrors.minimumInvestmentAmount && (
                <div className={cx('field-error')}>{formErrors.minimumInvestmentAmount}</div>
              )}
            </div>
          </div>

          <div className={cx('form-row')}>
            <label>전략 소개</label>
            <div className={cx('form-field')}>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="내용을 입력하세요"
                className={cx('description-textarea')}
              />
              {formErrors.description && (
                <div className={cx('field-error')}>{formErrors.description}</div>
              )}
            </div>
          </div>

          <div className={cx('form-row')}>
            <label>제안서</label>
            <div className={cx('form-field')}>
              {renderFileUpload()}
              {formErrors.proposalFile && (
                <div className={cx('field-error')}>{formErrors.proposalFile}</div>
              )}
            </div>
          </div>

          <p className={cx('notice')}>
            *매매 유형, 주기, 종목, 최소운용 가능 금액은 추후 수정이 불가합니다.
          </p>

          <div className={cx('button-wrapper')}>
            <Button variant="outline" onClick={() => router.back()} type="button">
              취소
            </Button>
            <Button variant="filled" type="submit" disabled={isRegistering}>
              {isRegistering ? '등록 중...' : '전략 등록하기'}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default StrategyAddPage
